#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Script to find and fix nested quotes in all course data files
 * This prevents TypeScript compilation errors caused by unescaped nested quotes
 */

const courseDataPattern = 'lib/lib/courses/**/*-course-data.ts';
let filesProcessed = 0;
let filesWithIssues = 0;
let fixesApplied = 0;

console.log('[v0] Starting nested quotes fixer...\n');

// Find all course data files
glob(courseDataPattern, (err, files) => {
  if (err) {
    console.error('[v0] Error reading files:', err);
    process.exit(1);
  }

  console.log(`[v0] Found ${files.length} course data files to process\n`);

  files.forEach((file) => {
    try {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Pattern 1: explanation: "...text "quoted text" more text..."
      // This matches any explanation field with unescaped nested quotes
      const nestedQuotesRegex = /explanation:\s*"([^"]*)"\s*"([^"]*)"\s*"([^"]*)"/g;
      
      // Pattern 2: Any field with " " pattern inside double quotes that should be escaped
      const problemPattern = /:\s*"([^"]*)"([^"]*)"([^"]*)"/g;
      
      let hasIssues = false;
      let updatedContent = content;
      
      // Check for nested quotes patterns
      if (content.includes('explanation:') && content.match(/".*".*"/)) {
        // More sophisticated pattern: find explanation fields with unescaped nested quotes
        updatedContent = updatedContent.replace(
          /explanation:\s*"([^"]*)"([^"]*)"([^"]*)"/g,
          (match, part1, quote, part2) => {
            // If there's a quote in the middle without escaping, it's a problem
            if (quote.includes('"')) {
              hasIssues = true;
              fixesApplied++;
              // Remove the nested quotes by just removing them
              return `explanation: "${part1}${quote.replace(/"/g, '')}${part2}"`;
            }
            return match;
          }
        );

        // Alternative pattern for common phrases with quotes
        updatedContent = updatedContent.replace(
          /explanation:\s*"(.*?)"(.*?)"(.*?)"/g,
          (match, before, middle, after) => {
            if (before && middle && after) {
              hasIssues = true;
              fixesApplied++;
              return `explanation: "${before}${middle}${after}"`;
            }
            return match;
          }
        );

        // Pattern for create "lessons learned"
        updatedContent = updatedContent.replace(
          /create "([^"]*)"/g,
          'create $1'
        );

        // Pattern for improve "future"
        updatedContent = updatedContent.replace(
          /improve "([^"]*)"/g,
          'improve $1'
        );

        // Pattern for establish "..."
        updatedContent = updatedContent.replace(
          /establish "([^"]*)"/g,
          'establish $1'
        );

        // Pattern for develop "..."
        updatedContent = updatedContent.replace(
          /develop "([^"]*)"/g,
          'develop $1'
        );

        // Pattern for ensure "..."
        updatedContent = updatedContent.replace(
          /ensure "([^"]*)"/g,
          'ensure $1'
        );

        // Pattern for require "..."
        updatedContent = updatedContent.replace(
          /require "([^"]*)"/g,
          'require $1'
        );
      }

      if (hasIssues && updatedContent !== content) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        filesWithIssues++;
        console.log(`[v0] ✓ Fixed: ${file}`);
      }

      filesProcessed++;

    } catch (error) {
      console.error(`[v0] Error processing ${file}:`, error.message);
    }
  });

  console.log(`\n[v0] Processing complete!`);
  console.log(`[v0] Files processed: ${filesProcessed}`);
  console.log(`[v0] Files with issues: ${filesWithIssues}`);
  console.log(`[v0] Total fixes applied: ${fixesApplied}`);
  
  if (filesWithIssues === 0) {
    console.log(`[v0] ✓ No nested quote issues found!`);
  }
});
